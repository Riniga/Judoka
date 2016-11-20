using System;
using System.Collections.Generic;

namespace JudokaDataModel
{
    public class Course
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime EventDate { get; set; }
        public string Location { get; set; }
        public Judoka Leader { get; set; }
        public ICollection<Judoka> Judokas { get; set; }

    }
}
