"use client";

import { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import Image from "next/image";
import Section from "@/app/components/section/Section";
import SectionTitle from "@/app/components/section/SectionTitle";
import Footer from "@/app/components/Footer";
import Menu from "@/app/components/menu/Menu";
import MenuHeader from "@/app/components/menu/MenuHeader";
import MenuOption from "@/app/components/menu/MenuOption";
import MenuList from "@/app/components/menu/MenuList";
import Form from "@/app/components/form/Form";
import FormInput from "@/app/components/form/FormInput";
import FormTextarea from "@/app/components/form/FormTextarea";
import FormBtn from "@/app/components/form/FormBtn";
import SectionWrapper from "@/app/components/section/SectionWrapper";
import Nav from "@/app/components/nav/Nav";
import { useNav } from "@/context/NavCtx";
import { useMenuType } from "@/context/MenuTypeCtx";
import { chefImg, restaurantImg, mapImg } from "@/utils/mocks/images";
import { pizzas, salads, starters } from "@/utils/mocks/menu";
import { MenuInterface } from "@/utils/types/menu";
import { MenuTypeEnum } from "@/utils/enums/menuType";

const Home = () => {
    const { menuRef, aboutRef, contactRef } = useNav();
    const { selectedMenuType } = useMenuType();
    const [menuOption, setMenuOption] = useState<MenuInterface>(pizzas);

    useEffect(() => {
        const switchMenuOption = () => {
            switch (selectedMenuType) {
                case MenuTypeEnum.Pizza:
                    setMenuOption(pizzas);
                    break;
                case MenuTypeEnum.Salad:
                    setMenuOption(salads);
                    break;
                case MenuTypeEnum.Starter:
                    setMenuOption(starters);
            }
        };

        switchMenuOption();

        return switchMenuOption;
    }, [selectedMenuType]);

    return (
        <>
            <Header />
            <main>
                <Nav />
                <Section bgColor="#000" ref={menuRef}>
                    <SectionTitle>the menu</SectionTitle>
                    <Menu>
                        <MenuHeader />
                        <MenuList>
                            {menuOption.options.map(
                                ({ id, title, description, tag, price }) => (
                                    <MenuOption
                                        key={id}
                                        title={title}
                                        description={description}
                                        tag={tag}
                                        price={price}
                                    />
                                )
                            )}
                        </MenuList>
                    </Menu>
                </Section>
                <Section bgColor="#63353c" ref={aboutRef}>
                    <SectionTitle>about</SectionTitle>
                    <SectionWrapper>
                        <p>
                            The Pizza Restaurant was founded in blabla by Mr.
                            Italiano in lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col justify-between self-stretch">
                                <p>
                                    <span className="font-bold">The Chef?</span>{" "}
                                    Mr. Italiano himself
                                </p>
                                <p>We are proud of our interiors.</p>
                            </div>
                            <Image
                                src={chefImg.src}
                                alt={chefImg.alt}
                                title={chefImg.title}
                                className="w-[150px] rounded-full"
                            />
                        </div>
                        <Image
                            src={restaurantImg.src}
                            alt={restaurantImg.alt}
                            title={restaurantImg.title}
                        />
                        <article className="flex flex-col gap-y-6">
                            <h3 className="font-bold text-4xl">
                                Opening Hours
                            </h3>
                            <ul className="text-2xl columns-2 leading-14">
                                <li>Mon & Tue CLOSED</li>
                                <li>Wednesday 10.00 - 24.00</li>
                                <li>Thursday 10:00 - 24:00</li>
                                <li>Friday 10:00 - 12:00</li>
                                <li>Saturday 10:00 - 23:00</li>
                                <li>Sunday Closed</li>
                            </ul>
                        </article>
                    </SectionWrapper>
                </Section>
                <Image
                    src={mapImg.src}
                    alt={mapImg.alt}
                    title={mapImg.title}
                    className="grayscale-75 "
                />
                <Section bgColor="#6b797b" ref={contactRef}>
                    <SectionTitle>contact</SectionTitle>
                    <SectionWrapper>
                        <p>
                            Find us at some address at some place or call us at
                            05050515-122330
                        </p>
                        <p>
                            <span className="p-1 bg-black text-white">
                                FYI!
                            </span>{" "}
                            We offer full-service catering for any event, large
                            or small. We understand your needs and we will cater
                            the food to satisfy the biggerst criteria of them
                            all, both look and taste.
                        </p>
                        <p className="text-4xl">
                            <strong>Reserve</strong> a table, ask for today's
                            special or just send us a message:
                        </p>
                        <Form>
                            <FormInput
                                type="text"
                                placeholder="Name"
                                required={true}
                            />
                            <FormInput
                                type="number"
                                placeholder="How many people"
                                required={true}
                            />
                            <FormInput
                                type="datetime-local"
                                placeholder="Date and time"
                                required={true}
                            />
                            <FormTextarea
                                placeholder="Message / Special requirements"
                                required={true}
                            />
                            <FormBtn>send message</FormBtn>
                        </Form>
                    </SectionWrapper>
                </Section>
            </main>
            <Footer />
        </>
    );
};

Home.displayName = "Home";

export default Home;
