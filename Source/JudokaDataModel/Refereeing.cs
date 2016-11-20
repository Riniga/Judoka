namespace JudokaDataModel
{
    public class Refereeing
    {

        public int Id { get; set; }
        public Competition Comptition{ get; set; }
        public Judoka Judoka { get; set; }
        public Judoka Signed{ get; set; }
    }
}
