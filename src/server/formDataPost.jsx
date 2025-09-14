import axios from "axios";
import Swal from "sweetalert2";
const url = "http://localhost:9000";
export const registerForm = (payload, setFormFields, setIsSubmitting) => {
	axios.post(`${url}/user`, payload)
		.then((res) => {
			// Success alert
			Swal.fire({
				title: "Success!",
				text: res.data.message,
				icon: "success",
				confirmButtonText: "OK",
			});
			setFormFields({});
			setIsSubmitting(false);
		})
		.catch((err) => {
			console.log(err, "err");
			Swal.fire({
				title: "Oops!",
				text: "Something went wrong.",
				icon: "error",
				confirmButtonText: "Try Again",
			});
			setIsSubmitting(false);
		});
};
