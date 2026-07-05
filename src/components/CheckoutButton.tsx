import { useAuth0 } from "@auth0/auth0-react";
import LoadingButton from "./LoadingButton";
import { useLocation } from "react-router-dom";
import { useGetMyUser } from "@/api/MyUserApi";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import UserProfileForm, {
  type UserFormData,
} from "@/forms/user-profile-form/UserProfileForm";

type Props = {
  onCheckout: (useFormaData: UserFormData) => void;
  disabled: boolean;
  isLoading: boolean
};

const CheckoutButton = ({ onCheckout, disabled, isLoading }: Props) => {
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    loginWithRedirect,
  } = useAuth0();

  const { pathname } = useLocation();

  const { currentUser, isPending: isGetUserLoading } = useGetMyUser();

  const onLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: pathname,
      },
    });
  };

  if (!isAuthenticated) {
    return (
      <Button onClick={onLogin} className="bg-orange-500 flex-1">
        Log in check out
      </Button>
    );
  }

  if (isAuthLoading || !currentUser || isLoading) {
    return (
      <div>
        <LoadingButton />
      </div>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={disabled} className="bg-orange-500 flex-1">
          Go to checkout
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md:min-w-[700px] bg-gray-50">
        <UserProfileForm
          currentUser={currentUser}
          onSave={onCheckout}
          isLoading={isGetUserLoading}
          title="Confirm Delievery Details"
          buttonText="Continue to Payment"

        />
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutButton;
