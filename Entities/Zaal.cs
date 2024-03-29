using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace theaterlaak.Entities;

public class Zaal 
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Required]
    public int Id { get; init; }

    [Required]
    public ZaalType ZaalType { get; set; }

    [Required]
    public List<Stoel> Stoelen { get; set; } = new List<Stoel>();
}