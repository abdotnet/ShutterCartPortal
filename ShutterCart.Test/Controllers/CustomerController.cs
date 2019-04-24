using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace ShutterCart.Test.Controllers
{
   public class CustomerController
    {
        [Fact]
        public bool TestCustomerNameLength()
        {
            string customername = "Omolaja";

            int CustomernameLenth = 4;

          //  Asset.Equal(CustomernameLenth, customerName.Length);

            return (CustomernameLenth == customername.Length);

        }


    }
}
