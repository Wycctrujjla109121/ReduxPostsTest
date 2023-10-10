import { useLocation, useParams } from 'react-router-dom';
import s from './Post.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getSelectPost } from '../../store/asyncActions';
import { useForm, Controller } from 'react-hook-form';
import classNames from 'classnames';

export function Post() {
    const params = useParams()
    const dispatch = useDispatch()
    const post = useSelector(state => state.posts.post)

    const location = useLocation()

    useEffect(() => {
        dispatch(getSelectPost(params.id))
    }, [location])

    const { handleSubmit, control, reset } = useForm()

    const onSubmit = (values) => {
        console.log(values)
        // Логика для axios.post запроса
        reset()
    }

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={s.wrapper}>

            <div className={s.info}>
                {
                    post ? (
                        <>
                            <h2 className={s.info__title}><span className={s.info__title_span}>id: {post.id} - </span>{post.title}</h2>
                            <p className={s.info__description}>{post.body}</p>
                        </>
                    )
                        :
                        (
                            <span className={s.info__error}>
                                Поста не найдено
                            </span>
                        )
                }
                <button className={s.info__open} onClick={() => {
                    setIsOpen(!isOpen)
                    reset()
                }}>{isOpen ? 'Закрыть форму' : 'Открыть форму'}</button>
            </div>


            <form className={classNames(s.form, {
                [s.form__open]: isOpen
            })} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={s.form__title}>Добавить пост</h2>
                <Controller
                    control={control}
                    name="title"
                    defaultValue={''}
                    render={({ field: { onChange, value } }) => (
                        <input value={value ?? ''} className={s.form__input} required placeholder='title поста' onChange={onChange} />
                    )}
                />
                <Controller
                    control={control}
                    defaultValue={''}
                    name="body"
                    render={({ field: { onChange, value } }) => (
                        <input value={value ?? ''} className={s.form__input} required placeholder='body поста' onChange={onChange} />
                    )}
                />
                <button className={s.form__submit} type='submit'>Отправить</button>
            </form>
        </div >
    );
};