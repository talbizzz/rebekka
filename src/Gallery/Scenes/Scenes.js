import React from 'react';
import audioMondnacht from './Mondnacht-_Schumann_.mp3';
import audioWilkommen from './Willkommen-und-Abschied.mp3';
import ReactPlayer from "react-player";
import Sound from 'react-sound';


const Scenes = ({scenes}) => {
	return (
		<div>
			<div className="w-100 fl mt6 center">
				<div className="w-third-ns w-100 fl pa3 ">
					<ReactPlayer url='https://www.youtube.com/watch?v=ASJDB1KiLUc' width={'auto'} height={'auto'} playing={false} />
				</div>
				<div className="w-third-ns w-100 fl pa3">
					<ReactPlayer url='https://www.youtube.com/watch?v=GrlXQ8miP_I&authuser=0' width={'auto'} height={'auto'} playing={false} />
				</div>
				<div className="w-third-ns w-100 fl pa3">
					<ReactPlayer url='https://www.youtube.com/watch?v=uvaNPx_SyaE&authuser=0' width={'auto'} height={'auto'} playing={false} />
				</div>
			</div>
			<div className={"w-100 fl"}>
				<div className="tc w-50-ns pt4 ph4 fl w-100">
					<div className={"pv1"}>
						<audio controls>
							<source src={audioMondnacht} type="audio/mpeg"/>
						</audio>
					</div>
					<div className={"baskerville white pl5 fl w-100 "}>R.Schumann- Mondnacht</div>
				</div>
				<div className="tc w-50-ns pt4 ph4 fl w-100">
					<div className={"pv1"}>
						<audio controls>
							<source src={audioWilkommen} type="audio/mpeg"/>
						</audio>
					</div>
					<div className={"baskerville white pl5 fl w-100 "}>F.Schubert- Willkommen und Abschied</div>
				</div>
				<div className="pa5 fl w-20">
				</div>
			</div>
		</div>
	);
}

export default Scenes

