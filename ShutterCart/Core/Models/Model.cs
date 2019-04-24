using Newtonsoft.Json;
using shuttercart.Data.Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace shuttercart.Core.Models
{
  public class Model : IValidatableObject
  {
    //[JsonIgnore]
    public DateTime CreatedDate { get; set; } = DateTime.Now;
    [JsonIgnore]
    public long? CreatedBy { get; set; }
    [JsonIgnore]
    public DateTime? ModifiedDate { get; set; }
    [JsonIgnore]
    public long? ModifiedBy { get; set; }
    [JsonIgnore]
    public bool IsCancelled { get; set; }
    public bool Status { get; set; }

    public virtual bool Validate()
    {
      Validator.ValidateObject(this, new ValidationContext(this, serviceProvider: null, items: null));
      return true;
    }

    public virtual IEnumerable<ValidationResult> Validate(ValidationContext validationContext) => new ValidationResult[0];

    public Operation<string> GenerateUniqueEmployerCode() => Operation.Create(() =>
    {
      using (var rng = new RNGCryptoServiceProvider())
      {
        var i1 = Math.Abs(RandomInt(rng));
        var i2 = Math.Abs(RandomInt(rng));
        return $"UEC-{DateTime.Now.ToString("yyddMM")}-{i1.ToString("X")}-{i2.ToString("X")}";
      }
    });

    private static uint RandomInt(RandomNumberGenerator rng)
    {
      var intByte = new byte[4];
      rng.GetBytes(intByte);
      return BitConverter.ToUInt32(intByte, 0);
    }

  }

}
