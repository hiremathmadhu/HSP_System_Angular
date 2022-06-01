using System;
using System.Collections.Generic;

#nullable disable

namespace HomeServiceProvider.Models
{
    public partial class ServiceBooking
    {
        public int Serviceid { get; set; }
        public int? ServiceItemnum { get; set; }
        public string ServiceBookingaddress { get; set; }
        public DateTime? ServiceBookingdate { get; set; }
        public string ServiceContactnum { get; set; }
        public string ServicePaymenttype { get; set; }
    }
}
