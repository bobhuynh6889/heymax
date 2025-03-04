import { redirect } from 'next/navigation';
import { ClientButton } from '../../components/ClientButton';

// Screen content data
const screens = [
  {
    id: 1,
    title: 'Welcome to HEYMAX',
    description: 'Shop Your Way to A Dream Vacation',
    buttonText: 'Visit HEYMAX',
  },
];

export default function Screen({ params }: { params: { id: string } }) {
  const screenId = parseInt(params?.id);
  
  // Validate screen ID
  if (isNaN(screenId) || screenId < 1 || screenId > screens.length) {
    redirect('/screen/1');
  }
  
  const screen = screens[screenId - 1];
  
  return (
    <div className='flex flex-col min-h-screen p-6'>
      <div className='flex-1 flex flex-col items-center justify-center gap-12'>
        <div className='text-center max-w-md'>
          <h1 className='text-3xl font-bold mb-4'>{screen.title}</h1>
          <p className='text-white mb-8'>{screen.description}</p>
        </div>
        <div>
          <ClientButton href='https://heymax.ai' intent='primary' size='large'>
            {screen.buttonText}
          </ClientButton>
        </div>
      </div>
    </div>
  );
} 