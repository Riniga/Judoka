using System;
using System.Collections.Generic;

namespace JudokaDataModel
{
    public class Competition
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public DateTime EventDate { get; set; }
        public virtual ICollection<Category> Categories { get; set; }
    }
}
