namespace CitiesManagment.models {
  using System;

public class City
  {
    public City(string name, int squareMeterPrice, Addition[] additions, string id)
    {
        Name = name;
        SquareMeterPrice = squareMeterPrice;
        Additions = additions;
        Id = id;
    }

    // Auto-implemented readonly property:
    public string Name { get; }
    public int SquareMeterPrice { get; }

    public string Id { get; }
    public Addition[] Additions { get; }

  }

  public class Addition {

    public Addition(int price, string type){
      Price = price;
      Type = type;

    }
    public int Price { get; }
    public string Type { get; }
  }

}

