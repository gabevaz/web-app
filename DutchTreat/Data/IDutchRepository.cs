using System.Collections.Generic;
using DutchTreat.Data.Entities;

namespace DutchTreat.Data
{
    public interface IDutchRepository
    {
        IEnumerable<Product> GetAllProducts();
        IEnumerable<Product> GetProductsByCategory(string category);
        bool SaveChanges();
        IEnumerable<Order> GetAllOrders();
        void SaveAll();
        void AddEntity(object model);
        object GetOrderById(object id);
    }
}