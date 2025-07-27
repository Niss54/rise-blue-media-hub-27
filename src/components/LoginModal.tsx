import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X, Send } from 'lucide-react';
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const LoginModal = ({
  isOpen,
  onClose
}: LoginModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login/signup logic here
    console.log('Form submitted:', {
      email,
      password,
      rememberMe,
      isSignUp
    });
  };
  const handleTelegramLogin = () => {
    // Handle Telegram login logic here
    console.log('Telegram login clicked');
  };
  return <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="login-modal-content max-w-xs p-4 bg-transparent px-[16px] py-[16px] mx-0 my-0 rounded-3xl">
        <button onClick={onClose} className="login-close-button absolute right-4 top-4 z-10">
          <X className="h-5 w-5" />
        </button>

        <DialogHeader className="text-center pb-6">
          <DialogTitle className="text-2xl font-bold text-white mb-2">
            {isSignUp ? 'Create your account' : 'Sign in to your account'}
          </DialogTitle>
          <p className="text-gray-light/80">
            {isSignUp ? <>
                Already have an account?{' '}
                <button type="button" onClick={() => setIsSignUp(false)} className="login-link">
                  Sign in
                </button>
              </> : <>
                New here?{' '}
                <button type="button" onClick={() => setIsSignUp(true)} className="login-link">
                  Sign up
                </button>
              </>}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-white font-medium mb-2 block">
                Enter email address:
              </Label>
              <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="login-input" placeholder="your@email.com" required />
            </div>

            <div>
              <Label htmlFor="password" className="text-white font-medium mb-2 block">
                Enter password:
              </Label>
              <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="login-input" placeholder="••••••••" required />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" checked={rememberMe} onCheckedChange={checked => setRememberMe(checked as boolean)} className="login-checkbox" />
              <Label htmlFor="remember" className="text-gray-light text-sm cursor-pointer">
                Remember me
              </Label>
            </div>
          </div>

          <div className="space-y-4">
            <Button type="submit" className="login-button w-full">
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>

            <div className="login-divider">
              <div className="login-divider-text">Or</div>
            </div>

            <Button type="button" onClick={handleTelegramLogin} className="telegram-button w-full">
              <Send className="w-4 h-4 mr-2" />
              Sign in with Telegram
            </Button>
          </div>

          {!isSignUp && <div className="text-center">
              <button type="button" className="login-link text-sm">
                Forgot password?
              </button>
            </div>}
        </form>
      </DialogContent>
    </Dialog>;
};
export default LoginModal;