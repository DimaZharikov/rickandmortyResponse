import React, {FC, memo, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/Store";
import { nextPagesCall, setCharsSaga} from "../../Redux/CharList/CharListReducer";
import CharacterComponent from "./CharacterComponent";
import {charsResponseType} from "../../Redux/Persons/PersonsReducer";
import style from './charListsStyle.module.scss'
import HeaderComponent from "../Header/HeaderComponent";


const ChartListContainer: FC = memo(({

                                       }) => {
    const dispatch = useDispatch()
    const chars = useSelector<AppRootStateType, Array<charsResponseType>>(state => state.charList.data)
    const fetching = useSelector<AppRootStateType, boolean>(state => state.charList.isFetching)
    const [pages, setPages] = useState<number>(2)



    useEffect(() => {
        // get response to chars
        dispatch(setCharsSaga(1))


    }, [])

    const scrollHandler = (e: any) => {
        // scrollCalled  if in down - call
        if ((e.target.documentElement.scrollHeight) - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            !fetching && //brake call
            dispatch(nextPagesCall(pages))
            setPages((p) => {
                return p + 1
            })
        }

    }


    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [scrollHandler])


    return (<div className={style.body}>
        <div><HeaderComponent title = {'Rick and Morty Chars'} /></div>
            {
                chars.map((item, id) => {
                    return <CharacterComponent key={id}
                                               chars={item}/>
                })
            }


    </div>)

})

export default ChartListContainer