/* Food & Shopping — content from the Annecy Guide document (section by Amanda).
   Every text field is { en, fr }. Price strings use the document's € scale. */
window.FOOD_DATA = {
  legend: [
    { sym: "€", en: "Budget-friendly", fr: "Petit budget" },
    { sym: "€€", en: "Mid-range", fr: "Prix moyen" },
    { sym: "€€€", en: "Expensive", fr: "Cher" },
    { sym: "€€€€", en: "Very expensive / Luxury", fr: "Très cher / Luxe" }
  ],
  legendNote: {
    en: "Price symbols indicate how affordable or expensive a place is compared to similar places in the same category. Prices are approximate and may vary depending on what you order or purchase.",
    fr: "Les symboles indiquent si un lieu est abordable ou cher par rapport à des lieux similaires de la même catégorie. Les prix sont approximatifs et peuvent varier selon ce que vous commandez ou achetez."
  },
  categories: [
    {
      id: "restaurants",
      label: { en: "Restaurants", fr: "Restaurants" },
      layout: "tiers",
      tiers: [
        {
          sym: "€",
          title: { en: "Budget-friendly", fr: "Petit budget" },
          range: { en: "around 15–20 € per person", fr: "environ 15–20 € par personne" },
          items: [
            { name: "Tête de Cochon", price: "€", desc: { en: "Casual restaurant in the Old Town serving generous tartines (open sandwiches), cheese and charcuterie.", fr: "Restaurant décontracté de la Vieille Ville servant de généreuses tartines, du fromage et de la charcuterie." } },
            { name: "Pizza des Sommets", price: "€", desc: { en: "Highly rated local pizzeria serving pizzas at affordable prices in a friendly atmosphere.", fr: "Pizzeria locale très bien notée, avec des pizzas à prix abordables dans une ambiance conviviale." } },
            { name: "BUFA Pizza al taglio", price: "€", desc: { en: "Popular pizza spot in the heart of Annecy, offering Roman-style pizza by the slice, perfect for a quick and affordable meal.", fr: "Adresse de pizza populaire au cœur d'Annecy : pizza romaine à la part, parfaite pour un repas rapide et abordable." } },
            { name: "La Cantine Bouillon – Seynod", price: "€", desc: { en: "Traditional French brasserie serving classic homemade-style dishes at budget-friendly prices, ideal for an affordable sit-down meal.", fr: "Brasserie française traditionnelle servant des plats classiques façon fait maison à petits prix, idéale pour un repas assis abordable." } },
            { name: "Côté Prairie", price: "€–€€", desc: { en: "Quieter restaurant outside the tourist centre, serving seasonal French food.", fr: "Restaurant plus calme en dehors du centre touristique, avec une cuisine française de saison." } }
          ]
        },
        {
          sym: "€€",
          title: { en: "Mid-range", fr: "Prix moyen" },
          range: { en: "around 20–40 € per person", fr: "environ 20–40 € par personne" },
          tip: { label: { en: "Tip", fr: "Astuce" }, text: "Café du Paris" },
          items: [
            { name: "Le Balcon du Lac", price: "€€", desc: { en: "Traditional Savoyard restaurant at Col de la Forclaz with panoramic views over Lake Annecy.", fr: "Restaurant savoyard traditionnel au col de la Forclaz, avec vue panoramique sur le lac d'Annecy." } },
            { name: "Le Chalet", price: "€€", desc: { en: "Traditional Savoyard restaurant with a cozy Alpine atmosphere.", fr: "Restaurant savoyard traditionnel à l'ambiance alpine chaleureuse." } },
            { name: "Le Freti", price: "€€", desc: { en: "One of the classic cheese-focused restaurants in the Old Town. Known for fondue and raclette.", fr: "L'un des restaurants classiques autour du fromage dans la Vieille Ville. Connu pour sa fondue et sa raclette." } },
            { name: "Brasserie Savoyarde", price: "€€", desc: { en: "Traditional French and Savoyard dishes in a central location by the canal.", fr: "Plats traditionnels français et savoyards, en plein centre au bord du canal." } },
            { name: "La Bastille à Raoul", price: "€€", desc: { en: "Savoyard food with a beautiful canal-side location, close to the famous Palais de l'Île.", fr: "Cuisine savoyarde dans un beau cadre au bord du canal, près du célèbre Palais de l'Île." } },
            { name: "Le Zinc à Raoul", price: "€€", desc: { en: "Rustic Savoyard restaurant serving fondue, raclette and tartiflette.", fr: "Restaurant savoyard rustique servant fondue, raclette et tartiflette." } }
          ]
        },
        {
          sym: "€€€",
          title: { en: "Expensive", fr: "Cher" },
          range: { en: "around 40–70 € per person", fr: "environ 40–70 € par personne" },
          items: [
            { name: "Le Belvédère", price: "€€€", desc: { en: "A more upscale dining option with beautiful views over Annecy.", fr: "Une adresse plus haut de gamme avec une belle vue sur Annecy." } },
            { name: "Les Terrasses du Lac", price: "€€€", desc: { en: "Elegant French restaurant offering seasonal dishes and breathtaking panoramic views over Lake Annecy.", fr: "Restaurant français élégant proposant des plats de saison et une vue panoramique à couper le souffle sur le lac d'Annecy." } }
          ]
        },
        {
          sym: "€€€€",
          title: { en: "Fine dining", fr: "Gastronomique" },
          range: { en: "around 70 €+ per person", fr: "environ 70 € et plus par personne" },
          items: [
            { name: "Le Clos des Sens", price: "€€€€", desc: { en: "A luxury gastronomic restaurant in Annecy-le-Vieux, known for its creative cuisine inspired by the lake and surrounding region.", fr: "Restaurant gastronomique de luxe à Annecy-le-Vieux, connu pour sa cuisine créative inspirée du lac et de la région." } },
            { name: "L'Esquisse", price: "€€€€", desc: { en: "Michelin-starred restaurant in central Annecy, offering creative French cuisine, seasonal ingredients and elegant tasting menus.", fr: "Restaurant étoilé Michelin au centre d'Annecy : cuisine française créative, produits de saison et menus dégustation élégants." } }
          ]
        }
      ]
    },
    {
      id: "cafes",
      label: { en: "Cafés, brunch, bakeries & ice cream", fr: "Cafés, brunch, boulangeries & glaces" },
      short: { en: "Cafés & bakeries", fr: "Cafés & boulangeries" },
      items: [
        { name: "Le Glacier des Alpes", price: "€", desc: { en: "One of the best-known ice cream spots in Annecy. A must-try when walking around the Old Town, especially during summer.", fr: "L'un des glaciers les plus connus d'Annecy. Incontournable lors d'une balade dans la Vieille Ville, surtout en été." } },
        { name: "Café Bunna", price: "€", desc: { en: "Small specialty coffee shop in the Old Town. Great for a quick coffee break.", fr: "Petit coffee shop de spécialité dans la Vieille Ville. Parfait pour une pause café rapide." } },
        { name: "Chez Gaston", price: "€", desc: { en: "Popular waffle spot in central Annecy, serving delicious Belgian-style waffles with a variety of toppings, savory waffles and homemade ice cream.", fr: "Adresse de gaufres populaire au centre d'Annecy : délicieuses gaufres belges avec de nombreuses garnitures, gaufres salées et glaces maison." } },
        { name: "Campagne Boulangerie – Faubourg", price: "€", desc: { en: "Affordable artisan bakery in the Old Town, offering fresh croissants, bread, pastries and sandwiches.", fr: "Boulangerie artisanale abordable dans la Vieille Ville : croissants, pain, pâtisseries et sandwichs frais." } },
        { name: "Boulangerie des Haras", price: "€–€€", desc: { en: "One of Annecy's best-rated artisan bakeries, known for its delicious croissants, freshly baked bread and traditional French pastries.", fr: "L'une des boulangeries artisanales les mieux notées d'Annecy, connue pour ses délicieux croissants, son pain frais et ses pâtisseries françaises traditionnelles." } },
        { name: "Les Négociantes", price: "€–€€", desc: { en: "Welcoming coffee and brunch spot near central Annecy, known for coffee, homemade-style food and breakfast options.", fr: "Café-brunch accueillant près du centre d'Annecy, connu pour son café, sa cuisine façon maison et ses petits-déjeuners." } },
        { name: "Artisan Rouge", price: "€–€€", desc: { en: "Popular artisan bakery known for its traditional sourdough bread and delicious homemade flan.", fr: "Boulangerie artisanale populaire, connue pour son pain au levain traditionnel et son délicieux flan maison." } },
        { name: "Claude", price: "€–€€", desc: { en: "Creative café specializing in savory stuffed croissants, cinnamon rolls and homemade pastries.", fr: "Café créatif spécialisé dans les croissants salés garnis, les cinnamon rolls et les pâtisseries maison." } },
        { name: "Sanzarù", price: "€€", desc: { en: "Trendy and cozy brunch spot in central Annecy, serving delicious sweet and savory brunch dishes, pancakes, waffles and specialty coffee.", fr: "Brunch tendance et cosy au centre d'Annecy : plats sucrés et salés, pancakes, gaufres et café de spécialité." } },
        { name: "Slake Annecy", price: "€€", desc: { en: "Modern brunch café with pancakes, specialty coffee and vegetarian options. Alternative to traditional French cafés.", fr: "Café-brunch moderne avec pancakes, café de spécialité et options végétariennes. Une alternative aux cafés français traditionnels." } }
      ]
    },
    {
      id: "shopping",
      label: { en: "Shopping in Annecy", fr: "Shopping à Annecy" },
      short: { en: "Shopping", fr: "Shopping" },
      items: [
        { name: "Centre Commercial Courier", price: "€–€€€", desc: { en: "Main shopping mall in central Annecy, with clothing, beauty, electronics and other stores. Convenient and easy to reach on foot from the train station.", fr: "Principal centre commercial du centre d'Annecy : vêtements, beauté, électronique et autres boutiques. Pratique et facile d'accès à pied depuis la gare." } },
        { name: "Nouvelles Galeries", price: "€€–€€€€", desc: { en: "Shopping destination with fashion, beauty and lifestyle products. Better for browsing or shopping for something special.", fr: "Grand magasin de mode, beauté et art de vivre. Idéal pour flâner ou acheter quelque chose de spécial." } },
        { name: "Vieille Ville", price: "€–€€€", desc: { en: "The Old Town has lots of small independent shops selling clothes, souvenirs, jewelry, local food and handmade products. Perfect for window shopping.", fr: "La Vieille Ville compte de nombreuses petites boutiques indépendantes : vêtements, souvenirs, bijoux, produits locaux et artisanaux. Parfait pour le lèche-vitrine." } },
        { name: "Grand Epagny", price: "€–€€€", desc: { en: "Large shopping area outside central Annecy with many stores for clothing, sports, electronics, furniture and home essentials.", fr: "Grande zone commerciale en dehors du centre d'Annecy, avec de nombreux magasins : vêtements, sport, électronique, meubles et essentiels pour la maison." } },
        {
          name: "Old Town Market (Marché de la Vieille Ville)", price: "€–€€", feature: true,
          desc: { en: "Traditional outdoor market in Annecy's charming Old Town, offering fresh fruits, vegetables, local cheeses, bread, charcuterie and regional specialties.", fr: "Marché traditionnel en plein air dans la charmante Vieille Ville : fruits et légumes frais, fromages locaux, pain, charcuterie et spécialités régionales." },
          hours: { en: "Tuesdays, Fridays & Sundays, 7:00 AM–1:00 PM", fr: "Mardi, vendredi et dimanche, 7h00–13h00" },
          hoursLabel: { en: "Opening hours", fr: "Horaires" },
          note: { en: "On Fridays and Sundays, you'll also find clothing and other goods.", fr: "Le vendredi et le dimanche, vous trouverez aussi des vêtements et d'autres articles." }
        }
      ]
    },
    {
      id: "household",
      label: { en: "Budget-friendly shopping and household essentials", fr: "Shopping petit budget & essentiels pour la maison" },
      short: { en: "Household", fr: "Maison" },
      items: [
        { name: "Maxi Bazar", price: "€", desc: { en: "Affordable kitchenware, decorations, cleaning products, storage boxes and everyday household essentials.", fr: "Ustensiles de cuisine, décoration, produits d'entretien, boîtes de rangement et essentiels du quotidien à petits prix." } },
        { name: "Action", price: "€", desc: { en: "Budget household products, stationery, cleaning supplies and small home accessories.", fr: "Produits ménagers, papeterie, produits d'entretien et petits accessoires pour la maison à petits prix." } },
        { name: "GiFi", price: "€", desc: { en: "Home decoration, storage, kitchen products and inexpensive household items.", fr: "Décoration, rangement, articles de cuisine et objets ménagers bon marché." } },
        { name: "Decathlon", price: "€–€€", desc: { en: "Sportswear, hiking equipment, swimming accessories and outdoor essentials.", fr: "Vêtements de sport, équipement de randonnée, accessoires de natation et essentiels outdoor." } }
      ]
    },
    {
      id: "secondhand",
      label: { en: "Second-hand shops", fr: "Seconde main" },
      short: { en: "Second-hand", fr: "Seconde main" },
      intro: { en: "Worth checking for cheaper clothing, home items and more sustainable shopping.", fr: "À voir pour des vêtements et des objets moins chers, et un shopping plus durable." },
      items: [
        { name: "Emmaüs Annecy", price: "€", desc: { en: "Charity-run second-hand shop offering affordable furniture, clothing, books and household items.", fr: "Boutique solidaire de seconde main : meubles, vêtements, livres et objets ménagers abordables." } },
        { name: "Bazaar Without Borders", price: "€", desc: { en: "Affordable charity second-hand store selling furniture, kitchenware, books, clothes and household essentials.", fr: "Boutique solidaire de seconde main abordable : meubles, vaisselle, livres, vêtements et essentiels pour la maison." } },
        { name: "Culture Trock", price: "€–€€", desc: { en: "Second-hand shop specializing in books, vinyl records, CDs and DVDs.", fr: "Boutique de seconde main spécialisée dans les livres, vinyles, CD et DVD." } },
        { name: "United Vintage", price: "€–€€", desc: { en: "Popular vintage store in central Annecy offering a wide selection of second-hand branded clothing, streetwear and retro fashion.", fr: "Friperie populaire au centre d'Annecy : large choix de vêtements de marque d'occasion, streetwear et mode rétro." } },
        { name: "United Vintage Warehouse", price: "€–€€", desc: { en: "Large second-hand warehouse with a huge selection of vintage clothes, branded items and streetwear.", fr: "Grand entrepôt de seconde main avec un immense choix de vêtements vintage, de pièces de marque et de streetwear." } },
        { name: "Maison Tigre — vêtements actuels, brocante, bijoux", price: "€€–€€€", desc: { en: "Chic second-hand boutique offering carefully selected fashion, jewelry, accessories and unique vintage home decorations.", fr: "Boutique de seconde main chic : mode, bijoux et accessoires soigneusement sélectionnés, et objets déco vintage uniques." } },
        { name: "Retropical Vintage", price: "€€–€€€", desc: { en: "Cute vintage boutique in the Old Town specializing in unique retro clothing, colorful pieces and 90s/Y2K fashion.", fr: "Jolie boutique vintage de la Vieille Ville, spécialisée dans les vêtements rétro uniques, les pièces colorées et la mode 90s/Y2K." } }
      ]
    },
    {
      id: "groceries",
      label: { en: "Grocery shopping & supermarkets", fr: "Courses & supermarchés" },
      short: { en: "Groceries", fr: "Courses" },
      items: [
        { name: "Lidl", price: "€", desc: { en: "Budget groceries, everyday essentials and weekly shopping.", fr: "Courses petit budget, essentiels du quotidien et courses de la semaine." } },
        { name: "Aldi", price: "€", desc: { en: "Low-cost groceries and basic household products.", fr: "Courses à bas prix et produits ménagers de base." } },
        { name: "Carrefour", price: "€–€€", desc: { en: "Larger grocery shops, fresh food and household essentials. Cheapest and biggest one in Annecy-le-Vieux.", fr: "Grandes surfaces, produits frais et essentiels pour la maison. Le moins cher et le plus grand se trouve à Annecy-le-Vieux." } },
        { name: "E.Leclerc", price: "€–€€", desc: { en: "Larger shopping trips and a wide variety of products.", fr: "Pour les grosses courses et un large choix de produits." } },
        { name: "Intermarché", price: "€–€€", desc: { en: "Everyday groceries and fresh produce.", fr: "Courses du quotidien et produits frais." } },
        { name: "Monoprix", price: "€€–€€€", desc: { en: "Convenient central shopping, snacks, groceries and beauty/home products.", fr: "Pratique en centre-ville : snacks, courses, produits de beauté et pour la maison." } },
        { name: { en: "Local épiceries", fr: "Épiceries locales" }, price: "€€–€€€", desc: { en: "Specialty foods, small purchases and local products.", fr: "Épiceries fines, petits achats et produits locaux." } }
      ]
    }
  ]
};
