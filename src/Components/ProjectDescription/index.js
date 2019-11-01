import React from 'react';
import MediaQuery from 'react-responsive';

const ProjectDescription = props => {
	const styles = {
		description: {
			position: 'absolute',
			width: props.width || '320px',
			height: props.height,
			right: '5.5%',
			color: props.color || 'rgb(237, 40, 52)',
			top: props.top || '40%',
			fontSize: '1.4rem',
			textAlign: 'right',

		},
		ipadDescription: {
			position: 'absolute',
			width: props.width || '230px',
			right: '5.5%',
			color: props.color || 'rgb(237, 40, 52)',
			top: props.top || '98%',

			fontSize: '1rem',
			textAlign: 'right',

		},
    mobileDescription: {
      position: 'absolute',
      right: '7%',
      color: props.color || 'rgb(237, 40, 52)',
      top: props.top || '72%',
      fontSize: '0.8rem',
      textAlign: 'right',

    }
	};
	return (
		<div>
			<MediaQuery minWidth={900}>
				<div style={styles.description}>
					<p>{props.description}</p>
				</div>
			</MediaQuery>
			<MediaQuery minWidth={601} maxWidth={899}>
				<div style={styles.ipadDescription}>
					<p>{props.description}</p>
				</div>
			</MediaQuery>
			<MediaQuery maxWidth={600}>
				<div style={styles.mobileDescription}>
					<p>{props.description}</p>
				</div>
			</MediaQuery>
		</div>
	);
};

export default ProjectDescription;
