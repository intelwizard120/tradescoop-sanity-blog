export default function Avatar({ name, picture, className }) {
  return (
    <div className="flex items-center">
      <img src={picture} className="mr-4 h-12 w-12 rounded-full" alt={name} />
      <div className={className ? className: "text-xl ft-bold"}>{name}</div>
    </div>
  )
}
