import React from 'react';
import MediaQuery from 'react-responsive';

const ProjectBio = props => {
	const styles = {
		bio: {
			position: 'absolute',
			width: props.width || '320px',
			height: props.height || '800px',
			right: props.right || '5.5%',
			color: props.color || 'rgb(237, 40, 52)',
			top: props.top || '40%',
			textAlign: 'right',
			
		},

		mobilebio: {
			position: 'absolute',
			right: props.right || '6.5%',
			width: props.width || '350px',
			color: props.color || 'rgb(237, 40, 52)',
			top: props.top || '102%x',
			textAlign: 'right',
			
		},
		ipadbio: {
			position: 'absolute',
			right: props.right || '5.5%',
			width: props.width || '350px',
			color: props.color || 'rgb(237, 40, 52)',
			top: props.top || '100%',
			textAlign: 'right',
		}
	};
	return (
        <div>
        <MediaQuery minWidth={900}>
            <div style={styles.bio}>
                <p>{props.bio}</p>
            </div>
        </MediaQuery>
        <MediaQuery minWidth={601} maxWidth={899}>
            <div style={styles.ipadbio}>
                <p>{props.bio}</p>
            </div>
        </MediaQuery>
        <MediaQuery maxWidth={600}>
            <div style={styles.mobilebio}>
                <p>{props.bio}</p>
            </div>
        </MediaQuery>
    </div>
	);
};

export default ProjectBio;
