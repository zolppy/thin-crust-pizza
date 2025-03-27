import { v4 as uuid } from "uuid";
import type { MenuInterface } from "@/utils/types/menu";
import { MenuTypeEnum } from "@/utils/enums/menuType";
import { MenuTagEnum } from "@/utils/enums/menuTag";

const pizzas: MenuInterface = {
    id: uuid(),
    type: MenuTypeEnum.Pizza,
    options: [
        {
            id: uuid(),
            title: "Margherita",
            description: "Fresh tomatoes, fresh mozzarella, fresh basil",
            price: 12.5,
        },
        {
            id: uuid(),
            title: "Formaggio",
            description:
                "Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)",
            price: 15.5,
        },
        {
            id: uuid(),
            title: "Chicken",
            description: "Fresh tomatoes, mozzarella, chicken, onions",
            price: 17.0,
        },
        {
            id: uuid(),
            title: "Pineapple'o'clock",
            description:
                "Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil",
            price: 16.5,
        },
        {
            id: uuid(),
            title: "Meat Town",
            description:
                "Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken",
            tag: MenuTagEnum.Hot,
            price: 20.0,
        },
        {
            id: uuid(),
            title: "Parma",
            description:
                "Fresh tomatoes, mozzarella, parma, bacon, fresh arugula",
            tag: MenuTagEnum.New,
            price: 21.5,
        },
    ],
};

const salads: MenuInterface = {
    id: uuid(),
    type: MenuTypeEnum.Salad,
    options: [
        {
            id: uuid(),
            title: "Lasagna",
            description: "Special sauce, mozzarella, parmesan, ground beef",
            tag: MenuTagEnum.Popular,
            price: 13.5,
        },
        {
            id: uuid(),
            title: "Ravioli",
            description: "Ravioli filled with cheese",
            price: 14.5,
        },
        {
            id: uuid(),
            title: "Spaghetti Classica",
            description: "Fresh tomatoes, onions, ground beef",
            price: 11.0,
        },
        {
            id: uuid(),
            title: "Seafood pasta",
            description: "Salmon, shrimp, lobster, garlic",
            price: 25.5,
        },
    ],
};

const starters: MenuInterface = {
    id: uuid(),
    type: MenuTypeEnum.Starter,
    options: [
        {
            id: uuid(),
            title: "Today's Soup",
            description: "Ask the waiter",
            tag: MenuTagEnum.Seasonal,
            price: 5.5,
        },
        {
            id: uuid(),
            title: "Bruschetta",
            description: "Bread with pesto, tomatoes, onion, garlic",
            price: 8.5,
        },
        {
            id: uuid(),
            title: "Garlic bread",
            description: "Grilled ciabatta, garlic butter, onions",
            price: 9.5,
        },
        {
            id: uuid(),
            title: "Tomozzarella",
            description: "Tomatoes and mozzarella",
            price: 10.5,
        },
    ],
};

const menu: MenuInterface[] = [pizzas, salads, starters];

export { pizzas, salads, starters, menu };
