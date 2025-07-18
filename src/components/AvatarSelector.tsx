import { useState } from "react";
import Image from "next/image";

const people = [
	{ name: "Nick Jonas", avatar: "/img/avatars/nick.png" },
	{ name: "Anna Lee", avatar: "/img/avatars/anna.png" },
	{ name: "John Smith", avatar: "/img/avatars/john.png" },
	{ name: "Elen Black", avatar: "/img/avatars/elen.png" },
	{ name: "Sam Doe", avatar: "/img/avatars/sam.png" },
];

export const AvatarSelector = () => {
	const [selected, setSelected] = useState(0);

	return (
		<div>
			<div className='avatars'>
				{people.map((person, index) => (
					<div key={index} onClick={() => setSelected(index)}>
						<Image
							src={person.avatar}
							alt={person.name}
							width={30}
							height={30}
							className={`image ${index === selected ? "active" : ""}`}
						/>
					</div>
				))}
			</div>
			<div>
				<h3 className='name'>{people[selected].name}</h3>
			</div>
		</div>
	);
};
