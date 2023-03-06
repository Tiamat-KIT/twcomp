export default function Button({
    children,
    ButtonTheme,
    Ghost,
    Activate,
    Animate,
}:{
    children?: React.ReactNode | string
    ButtonTheme:string,
    Ghost:boolean, 
    Activate:boolean,
    Animate:boolean,
}){
    const Theme = ButtonTheme ? `btn-${ButtonTheme}` : ""
    const VisualGhost = Ghost ? " btn-ghost" : ""
    const Active_Disactive = Activate ? " btn-active" : " btn-disabled"
    const AnimateBool = Animate ? "" : " no-animation"

    const ButtonSetting = Theme + VisualGhost + Active_Disactive + AnimateBool

    console.log(ButtonSetting)
    return(
        <button className={`btn ${ButtonSetting}`} >
            {children}
        </button>
    )
    
}