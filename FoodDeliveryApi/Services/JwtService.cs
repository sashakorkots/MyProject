using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace FoodDeliveryApi
{
    public class JwtService
    {
        private byte[] securityKey = Encoding.UTF8.GetBytes("very security key");

        public string Generate(int id)
        {
            SymmetricSecurityKey symmetricKey = new SymmetricSecurityKey(securityKey);
            SigningCredentials credentials = new SigningCredentials(symmetricKey, SecurityAlgorithms.HmacSha256Signature);
            JwtHeader header = new JwtHeader(credentials);
            JwtPayload payload = new JwtPayload(id.ToString(), null, null,new DateTime(),new DateTime().AddHours(5));
            JwtSecurityToken token = new JwtSecurityToken(header, payload);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
        public JwtSecurityToken Verify(string jwt)
        {
            JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();

            tokenHandler.ValidateToken(jwt, new TokenValidationParameters{
                IssuerSigningKey = new SymmetricSecurityKey(securityKey),
                ValidateIssuerSigningKey = true,
                ValidateIssuer = false,
                ValidateAudience = false
            }, out SecurityToken validatedToken);

            return (JwtSecurityToken) validatedToken;
        }

    }
}