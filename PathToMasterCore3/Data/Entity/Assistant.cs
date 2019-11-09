using PathToTheMaster.Web.Data.Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PathToMasterCore3.Data.Entity
{
    public class Assistant
    {
        public int Id { get; set; }
        public string First { get; set; }
        public string Middle { get; set; }
        public string Second { get; set; }

        public int LaboratoryId { get; set; }

        [ForeignKey(nameof(LaboratoryId))]
        public virtual Laboratory Laboratory { get; set; }
    }
}
