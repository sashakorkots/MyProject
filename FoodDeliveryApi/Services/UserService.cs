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
    }
}