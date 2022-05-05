import startCase from 'lodash/startCase'

export const Input = ({data, name, ...opts}) => (
  <div className='flex flex-col'>
    <label htmlFor={name}>{startCase(name)}</label>
    <input
      {...opts}
      type={opts.type || 'text'}
      id={name}
      name={name}
      className={`my-2 ${data?.errors[name] ? 'border-red-500' : ''}`}
    />
    {data?.errors[name] && <span className='text-red-500 my-1'>{data.errors[name]}</span>}
  </div>
)