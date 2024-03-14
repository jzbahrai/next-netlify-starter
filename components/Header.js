export default function Header({ left, right }) {
  return (
    <topbar>
      <leftitem>
        {left}
      </leftitem>
      <rightitem>
        {right}
      </rightitem>
    </topbar>
  )
}
