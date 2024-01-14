import Button from '~/components/ui/button';
export default function SkilItem({ children }) {
  return (
    
    <li className="bg-background-200 dark:bg-background-200 dark:ring-background-0  sm:dark:ring-0 dark:border-t-2 dark:border-t-background-300 shadow-lg ring-background-300 hover:scale-110 cursor-pointer hover:bg-background-300  transition-all ring-1 flex items-center justify-center rounded-lg p-3">
      <a href="" className="flex flex-col items-center justify-center gap-1">
        {children}
      </a>
     
    </li>
  );
}
