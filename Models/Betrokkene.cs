using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace theaterlaak.Models;

public record Betrokkene
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; init; }
    public TypePersoon TypePersoon { get; init; }
    public string Naam { get; init; } = string.Empty;

    public string Omschrijving { get; init; } = string.Empty;

    public string Afbeelding { get; init; } = string.Empty;

    public DateTime? GeboorteDatum { get; init; }
}