
export default function TopBar({ leftItems, rightItems }) {
    return (
        <topbar>
            <leftitem>
                {leftItems}
            </leftitem>
            <rightitem>
                {rightItems}
            </rightitem>
        </topbar>
    )
}
