import {FC} from "react";
import style from './haderStyle.module.scss'


interface Props {
    title: string | undefined


}


const HeaderComponent: FC <Props>= ({
    title
                                    }) => {
    return (<div className={style.body}>
        <h1>{title}</h1>
    </div>)
}


export default HeaderComponent