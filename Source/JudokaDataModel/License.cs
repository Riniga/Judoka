using System;

namespace JudokaDataModel
{
    public class License
    {

        public int Id { get; set; }
        public DateTime IssuedDate { get; set; }
        public Judoka Judoka { get; set; }
        public Judoka Issuer { get; set; }
        public string Location { get; set; }
        public DateTime ValidTo { get; set; }
    }
}
