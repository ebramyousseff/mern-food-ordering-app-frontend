import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/user-profile-form/manage-restaurant-form/ManageRestaurantForm"

const ManageRestaurantPage = () => {
  const {createRestaurant, isPending :isCreatePending} = useCreateMyRestaurant();
  const {restaurant}= useGetMyRestaurant();
  const {updateRestaurant, isPending :isUpdatePending} = useUpdateMyRestaurant();
  const isEditing = !!restaurant
  return (
    <div><ManageRestaurantForm onSave={isEditing ? updateRestaurant : createRestaurant} isLoading={isCreatePending || isUpdatePending}/></div>
  )
}

export default ManageRestaurantPage