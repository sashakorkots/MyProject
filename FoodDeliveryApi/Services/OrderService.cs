using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FoodDeliveryApi.Models;

namespace FoodDeliveryApi
{
    public class OrderService
    {

        FoodDeliveryContext db;


        public OrderService(FoodDeliveryContext context)
        {
            this.db = context;
        }

        internal Order CreateOrder(Order model)
        {
            db.Orders.Add(model);
            return model;
        }
    }
}