<template>
  <div>
    <label v-if="label" class="label mb-1">
      <span class="inner">
        {{ label }}
        <span v-if="required"> (*)</span>
      </span>
    </label>
    <input
      class="soft-input"
      :value="value"
      :autocomplete="autocomplete"
      :required="required"
      :step="step"
      :max="max"
      :min="min"
      :type="type"
      :placeholder="placeholder"
      :minlength="minlength"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Number, Date, String],
      default: 0,
    },
    placeholder: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    minlength: {
      type: [String, Number],
      default: 0,
    },
    min: {
      type: [String, Number],
      default: null,
    },
    max: {
      type: [String, Number],
      default: null,
    },
    maxLimit: {
      type: Boolean,
      default: false,
    },
    step: {
      type: [String, Number],
      default: 0,
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      display_label: false,
    }
  },
  watch: {
    value() {
      if (this.value > this.max && this.max) {
        this.$emit('input', this.max)
      }
    },
  },
}
</script>

<style scoped>
.soft-input {
  width: 100%;
  border: 0 solid transparent;
  border-radius: 5px;
  padding: 11px 16px;
  font-size: 16px;
}

.soft-input {
  background: var(--white-b);
  color: var(--black-a);
}

.is-invalid {
  border: 2px solid rgba(255, 0, 0, 0.6);
}

.soft-input:focus {
  outline: none;
  /* border: 1px solid var(--color-c); */
  box-shadow: none;
}

.soft-input::placeholder {
  color: #686868;
}

.label {
  font-size: 12.5px;
  font-weight: 400;
}

.inner {
  height: 25px !important;
}
</style>
