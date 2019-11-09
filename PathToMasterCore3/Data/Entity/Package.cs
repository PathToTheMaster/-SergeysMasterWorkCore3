using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PathToTheMaster.Web.Data.Entity
{
    public class Package
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int NormId { get; set; }
        public int GroupId { get; set; }

        [ForeignKey(nameof(NormId))]
        public  virtual Norm Norm { get; set; }

        [ForeignKey(nameof(GroupId))]
        public virtual Group Group { get; set; }
    }
}
