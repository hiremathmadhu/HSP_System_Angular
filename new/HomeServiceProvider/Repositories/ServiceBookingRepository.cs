using HomeServiceProvider.Models;
using System.Collections.Generic;
using System.Linq;

namespace HomeServiceProvider.Repositories
{
    public class ServiceBookingRepository
    {
        private readonly HSP_DATABASEContext context;
        public ServiceBookingRepository()
        {
            context = new HSP_DATABASEContext();
        }
        public void AddServiceBooking(ServiceBooking servb)
        {
            context.ServiceBookings.Add(servb);
            context.SaveChanges();
        }
        public List<ServiceBooking> GetServiceBooking()
        {
            return context.ServiceBookings.ToList(); //return list of customers
        }
        public ServiceBooking GetServiceBooking(int id) //get customer details using customerid
        {
            ServiceBooking servb = context.ServiceBookings.Find(id);
            return servb;
        }
        public void EditServiceBooking(ServiceBooking servb) //edit row
        {
            context.ServiceBookings.Update(servb);
            context.SaveChanges();
        }
        public void DeleteServiceBooking(int id) //Delete customer row
        {
            ServiceBooking servb = context.ServiceBookings.Find(id);
            context.ServiceBookings.Remove(servb);
            context.SaveChanges();

        }
    }
}
