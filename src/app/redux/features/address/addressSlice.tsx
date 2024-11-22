import { createSlice } from "@reduxjs/toolkit";
import {
  addNewAddress,
  deleteAddress,
  getAddresses,
  getSingleAddress,
  updateAddress,
} from "./addressAction";

export interface Address {
  id?: string;
  address_name: string;
  street: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  phone_number: string;
}
interface InitialState {
  addresses: Address[];
  isLoading: boolean;
  isEdit: boolean;
  editAddress: Address;
}

const initialState: InitialState = {
  addresses: [],
  isLoading: true,
  isEdit: false,
  editAddress: {
    id: "",
    address_name: "",
    street: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
    phone_number: "",
  },
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    handleEditAction: (state) => {
      state.isEdit = !state.isEdit;
    },
    handleEditAddress: (state, { payload }) => {
      state.editAddress = payload;      
    },
    handleEditChange: ({ editAddress }, { payload }) => {
      editAddress[payload.name as keyof Address] = payload.value;
      
    },
  },
  extraReducers: (builder) => {
    builder
      //add new address
      .addCase(addNewAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewAddress.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addNewAddress.rejected, (state) => {
        state.isLoading = false;
      })

      //get addresses
      .addCase(getAddresses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAddresses.fulfilled, (state, { payload }) => {
        state.addresses = payload.data;
        state.isLoading = false;
      })
      .addCase(getAddresses.rejected, (state) => {
        state.isLoading = false;
      })
      //update address
      .addCase(updateAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAddress.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateAddress.rejected, (state) => {
        state.isLoading = false;
      })

      //delete address
      .addCase(deleteAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAddress.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteAddress.rejected, () => {})

      //get single address
      .addCase(getSingleAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleAddress.fulfilled, (state, { payload }) => {
        const addressExist = state.addresses.find(
          (address) => address.id === payload.id
        );
        if (addressExist) {
          state.addresses.findIndex((address) => address.id === payload.id);
        } else {
          state.addresses.push(payload);
        }
        state.isLoading = false;
        console.log("got succesfully");
      })
      .addCase(getSingleAddress.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { handleEditAction, handleEditAddress, handleEditChange } =
  addressSlice.actions;
export default addressSlice.reducer;
