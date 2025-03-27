import type { ImgInterface } from "@/utils/types/img";
import chef from "../../../public/chef.jpg";
import map from "../../../public/map.jpg";
import pizza from "../../../public/pizza.jpg";
import restaurant from "../../../public/restaurant.jpg";

const chefImg: ImgInterface = {
    src: chef,
    alt: "A black and white photograph shows two chefs in a professional kitchen setting, meticulously preparing food. The chef on the left, who is bald and has a short beard, is wearing a light-colored chef's jacket and a dark apron. He is focused on arranging small, dark-colored food items on a white plate with his hands. His expression is one of concentration. The chef on the right, partially visible in the frame, is holding a spoon in his right hand and appears to be adding sauce or liquid to another plate. He is also wearing a light-colored chef's jacket. In the background, out of focus, there are shelves with various kitchen items and what seems to be another person standing. The lighting in the kitchen is bright, highlighting the chefs and their work. The overall atmosphere suggests a busy and professional culinary environment.",
    title: "Chefs Preparing Food",
};

const mapImg: ImgInterface = {
    src: map,
    alt: "An aerial photograph taken directly above a four-way intersection in an urban environment. Two main roads intersect, each having multiple lanes for vehicular traffic. The road running horizontally across the image has a median strip with greenery. The road running vertically has a dedicated left-turn lane and a lane with a \"ONLY\" marking painted on the asphalt, indicating it's a one-way street for right turns only. Buildings of varying sizes and colors surround the intersection. On the top left, there's a large, light-colored building with geometric patterns on its roof. To the right of the vertical road, there's a long, narrow building with a white roof and several parked cars in front. Further to the right, a taller building with red and white vertical stripes is visible. Below the horizontal road, there are more buildings, including one with a light brown facade. Trees and patches of green vegetation are interspersed throughout the scene, adding natural elements to the urban landscape. The overall perspective is from a high vantage point, looking straight down at the intersection and its surroundings.",
    title: "Aerial View of a Street Intersection",
};

const pizzaImg: ImgInterface = {
    src: pizza,
    alt: "A close-up, high-angle shot showcases a delicious pizza with a golden-brown crust. The pizza is topped with melted white cheese, numerous round slices of bright red pepperoni, and several shiny black olives. The pepperoni slices are slightly curled at the edges, indicating they have been baked. Fresh green herbs, possibly oregano or parsley, are sprinkled sparsely across the pizza, adding a touch of color and visual texture. The crust is slightly raised and airy around the edges. The pizza appears to be freshly made and ready to be enjoyed. The lighting is bright and even, highlighting the vibrant colors and textures of the ingredients.",
    title: "Pepperoni and Olive Pizza",
};

const restaurantImg: ImgInterface = {
    src: restaurant,
    alt: 'A black and white photograph captures the interior of a cozy restaurant or cafe. The scene is dimly lit by pendant lights hanging from the ceiling. On the back wall, three large menu boards are visible, listing options for "Thirst," "Hunger," and "Beer." Below these, a counter displays various items, including covered cakes or pastries under glass domes. To the left, a barista stands behind another counter, possibly preparing drinks. Shelves behind the barista are stocked with mugs and other supplies. In the foreground, a wooden counter extends across the frame, with paper menus or promotional materials placed on it. The overall ambiance is relaxed and inviting, suggesting a casual dining or social gathering spot. The black and white tones enhance the vintage or rustic feel of the establishment.',
    title: "Interior of a Restaurant",
};

export { chefImg, mapImg, pizzaImg, restaurantImg };
