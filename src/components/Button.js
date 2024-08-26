const getClass = value=>{
  const buttonValues = {
    '=': 'equal',
    'x': 'operators',
    '-': 'operators',
    '+': 'operators',
    '/': 'operators',
    'C':'others',
    '+/-':'others',
    '%':'others',
  }
  return buttonValues[value]
}
export function Button({ value }) {
  return (
    <div className={`${getClass(value)} button`}>
      <p className="button-values">{value}</p>
    </div>
  );
}
