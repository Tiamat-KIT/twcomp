export default function Button({
    children?
    ButtonTheme,
    Ghost
    Activate
    Animate
}:{
    children?: React.ReactNode
    Theme:string
    Ghost:boolean, 
    Activate:boolean
    Animate:boolean
}){
    const ButtonTheme = Theme ? `-${ButtonTheme}` : ""
    const VisualGhost = Ghost ? "btn-ghost" : ""
    const Active_Disactive = Activate ? "btn-active" : "btn-active"
    const Animate = Animate ? "" : "no-animation"

    const ButtonSetting = ButtonTheme + VisualGhost + Active_Disactive + Animate 
    return(
        <button className={`btn ${ButtonSetting}`} >
            {children}
        </button>
    )
}