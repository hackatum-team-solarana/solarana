import * as Avatar from '@radix-ui/react-avatar';
import './styleAvatar.css';

function Profile() {
    return (
        <div style={{display: 'flex', gap: 20}}>
            <Avatar.Root className="AvatarRoot">
                <Avatar.Image
                    className="AvatarImage"
                    src="https://s32698.pcdn.co/wp-content/uploads/2021/11/Solana-1024x614.jpg.optimal.jpg"
                    alt="Colm Tuite"
                />
                <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                    CT
                </Avatar.Fallback>
            </Avatar.Root>
        </div>
    );
}

export default Profile;