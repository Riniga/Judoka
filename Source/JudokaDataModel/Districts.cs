using System.Collections.Generic;

namespace JudokaDataModel
{
    public class District
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Club> Clubs { get; set; }
    }
}
