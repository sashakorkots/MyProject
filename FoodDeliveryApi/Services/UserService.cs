using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FoodDeliveryApi.Models;

namespace FoodDeliveryApi
{
    public class UserService
    {
        FoodDeliveryContext db;
        public UserService(FoodDeliveryContext context)
        {
            this.db = context;
        }

        internal Client RegisterClient(RegisterClientDTO client)
        {
            Client newClient = new Client() {
                Name = client.Name,
                Surname = client.Surname,
                Email = client.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(client.Password)
            };
            db.Clients.Add(newClient);
            db.SaveChanges();
            return newClient;
        }

        internal Client FindByEmail(string email)
        {
            return db.Clients.FirstOrDefault(c => c.Email == email);
        }

        internal bool CheckPassword(string password, Client logClient)
        {
            return BCrypt.Net.BCrypt.Verify(password, logClient.Password);
        }

        internal ActionResult<IEnumerable<Client>> GetAllClients()
        {
            return db.Clients;
        }
    }
}