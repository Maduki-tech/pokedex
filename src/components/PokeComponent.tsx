

const PokeComponent = (props: any) => {

	const data = props.data;
	return(
		<div className="mt-8 grid grid-cols-6 gap-8 ">
			{data.map((poke: any, idx: number) => 
				<div key={idx} className="flex flex-col items-center justify-center bg-blue-300 ">
					<img
						src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${("00" + (idx + 1)).slice(-3)}.png`}
						alt={idx.toString()}
						className="w-32 h-32 "/>
					<div>
						{poke.name}
					</div>
				</div>
			 )}
		</div>
	)

}


export default PokeComponent;
