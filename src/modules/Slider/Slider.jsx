import { useDispatch, useSelector } from "react-redux";

import s from './Slider.module.scss'
import { useEffect } from "react";
import { getPosts } from "../../store/asyncActions";

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";


export function Slider() {
    const dispath = useDispatch()
    const posts = useSelector(state => state.posts)

    useEffect(() => {
        dispath(getPosts())
    }, [])

    return (
        <div className={s.wrapper}>
            <Swiper
                className={s.swiper}
            >
                {posts?.posts?.filter((post, index) => index < 20)?.map((currentPost, index) => (
                    <SwiperSlide key={currentPost.id} className={s.swiper__slide}>
                        <p className={s.swiper__text}>{index + 1}</p>
                        <h2 className={s.swiper__title}>{currentPost.title}</h2>
                        <Link to={`/post/${currentPost.id}`} className={s.swiper__link}>Читать</Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            {
                posts.error &&
                <h2 className={s.error}>Произошла ошибка</h2>
            }
        </div>
    );
};