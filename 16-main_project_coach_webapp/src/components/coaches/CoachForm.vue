<script>
export default {
    emits: ['onSave'],
    data() {
        return {
            firstname: {
                value: '',
                isValid: true
            },
            lastname: {
                value: '',
                isValid: true
            },
            description: {
                value: '',
                isValid: true
            },
            rate: {
                value: null,
                isValid: true
            },
            areas: {
                value: [],
                isValid: true
            },
            formIsValid: true
        }
    },
    methods: {
        clearValidity(input) {
            this[input].isValid = true;
        },
        validateForm() {
            this.formIsValid = true;
            if (this.firstname.value === '') {
                this.firstname.isValid = false;
                this.formIsValid = false;
            }
            if (this.lastname.value === '') {
                this.lastname.isValid = false;
                this.formIsValid = false;
            }
            if (this.description.value === '') {
                this.description.isValid = false;
                this.formIsValid = false;
            }
            if (this.rate.value === null || this.rate.value <= 0) {
                this.rate.isValid = false;
                this.formIsValid = false;
            }
            if (this.areas.value.length === 0) {
                this.areas.isValid = false;
                this.formIsValid = false;
            }
            return this.formIsValid;
        },
        submitForm() {
            if (!this.validateForm()) {
                return;
            }
            const coachData = {
                firstname: this.firstname.value,
                lastname: this.lastname.value,
                description: this.description.value,
                rate: this.rate.value,
                areas: this.areas.value
            }
            this.$emit('onSave', coachData);
        }
    }
}
</script>

<template>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{ invalid: !firstname.isValid }">
            <label for="firstname">First Name</label>
            <input v-model.trim="firstname.value" type="text" id="firstname" @blur="clearValidity('firstname')" />
            <p v-if="!firstname.isValid">First name must not be empty!</p>
        </div>
        <div class="form-control" :class="{ invalid: !lastname.isValid }">
            <label for="lastname">Last Name</label>
            <input v-model.trim="lastname.value" type="text" id="lastname" @blur="clearValidity('lastname')" />
            <p v-if="!lastname.isValid">Last name must not be empty!</p>
        </div>
        <div class="form-control" :class="{ invalid: !description.isValid }">
            <label for="description">Description</label>
            <textarea v-model.trim="description.value" id="description" rows="5"
                @blur="clearValidity('description')"></textarea>
            <p v-if="!description.isValid">Description must not be empty!</p>
        </div>
        <div class="form-control" :class="{ invalid: !rate.isValid }">
            <label for="rate">Hourly Rate</label>
            <input v-model.number="rate.value" type="number" id="rate" @blur="clearValidity('rate')" />
            <p v-if="!rate.isValid">Rate must be greater than 0!</p>
        </div>
        <div class="form-control" :class="{ invalid: !areas.isValid }">
            <h3>Areas of Expertise</h3>
            <div>
                <input v-model="areas.value" type="checkbox" id="frontend" value="frontend"
                    @blur="clearValidity('areas')" />
                <label for="frontend">Frontend Development</label>
            </div>
            <div>
                <input v-model="areas.value" type="checkbox" id="backend" value="backend"
                    @blur="clearValidity('areas')" />
                <label for="backend">Backend Development</label>
            </div>
            <div>
                <input v-model="areas.value" type="checkbox" id="career" value="career"
                    @blur="clearValidity('areas')" />
                <label for="career">Career Advisory</label>
            </div>
            <p v-if="!areas.isValid">Please select at least one area!</p>
        </div>
        <p v-if="!formIsValid" class="invalid">Please fix the above errors and submit again</p>
        <BaseButton>Register</BaseButton>
    </form>
</template>

<style scoped>
.form-control {
    margin: 0.5rem 0;
}

label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input[type='checkbox']+label {
    font-weight: normal;
    display: inline;
    margin: 0 0 0 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
}

input:focus,
textarea:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
}

input[type='checkbox'] {
    display: inline;
    width: auto;
    border: none;
}

input[type='checkbox']:focus {
    outline: #3d008d solid 1px;
}

h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
}

.invalid label {
    color: red;
}

.invalid input,
.invalid textarea {
    border: 1px solid red;
}
</style>