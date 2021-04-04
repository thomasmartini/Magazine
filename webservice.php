<?php
/**
 * @return array
 */
function getDishes()
{
    return [
        [
            "id" => 1,
            "name" => "Penne Pesto",
            "kitchen" => "Italian",
        ],
        [
            "id" => 2,
            "name" => "Alternative Tikka Masala",
            "kitchen" => "Indian",
        ],
        [
            "id" => 3,
            "name" => "Enchilada's",
            "kitchen" => "Mexican",
        ],
        [
            "id" => 4,
            "name" => "Shoarma",
            "kitchen" => "Libanese",
        ],
        [
            "id" => 5,
            "name" => "Simple Pasta",
            "kitchen" => "Italian",
        ],
        [
            "id" => 6,
            "name" => "Nasi with Sate",
            "kitchen" => "Indonesian",
        ],
        [
            "id" => 7,
            "name" => "Tuscany Pasta",
            "kitchen" => "Italian",
        ],
        [
            "id" => 8,
            "name" => "Enchisange",
            "kitchen" => "Mexican/italian",
        ],
        [
            "id" => 9,
            "name" => "Spaghetti Carbonara",
            "kitchen" => "Italian",
        ],
        [
            "id" => 10,
            "name" => "Bruschetta",
            "kitchen" => "Italian",
        ],
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getDishDetails($id)
{
    $tags = [
        1 => [
            "recipe" => "Fry your chicken in a large pan and once it's done throw the pesto in so the chicken can absorb the flavors.
             When the pasta and the chicken is almost done throw some cherry tomatoes in and bake them for another minute or two.
             Before throwing the penne in with the rest of the ingredients in the pan and mix until satisfactory.
             Throw on some cheese for added flavor and pine nuts for a bit of a crunch",
            "tags" => ['pasta', 'pesto' , 'chicken']
        ],
        2 => [
            "recipe" => "First cook some green beans and fry your chicken in a large pan because we going to be adding a lot of ingredients later on. Also
             start cooking some rice now so it can sit for a while when it's done.
             When your chicken is done throw in the green beans that we cook earlier. Stir-fry them about 5 minutes. Add the ajam paniki and red curry also
             add the kokos milk at the same time. Make sure that everything is mixed properly. turn up the heat a bit until it start boiling.
             let it boil for about 10 minutes but make sure that it doesn't burn. Turn the heat down low and let it sit for 5-10 more minutes so it can
             cool off a bit and get back a bit of mass. Put some rice on your plate and pour on some sauce and you are ready to eat",
            "tags" => ['ajam paniki', 'red curry', 'chicken', 'rice', 'beans']
        ],
        3 => [
            "recipe" => "Very nice when your grandma prepares this meal",
            "tags" => ['omnomnom']
        ],
        4 => [
            "recipe" => "Everytime in the city after midnight",
            "tags" => ['kapsalon', 'tasty', 'meat']
        ],
        5 => [
            "recipe" => "Specialty when on holiday in Spain",
            "tags" => ['fish']
        ],
    ];

    return $tags[$id];
}
