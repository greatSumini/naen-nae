<template>
  <div class="modifier-bar">
    <search-box class="modifier-bar__search" />
    <input-field
      class="modifier-bar__input"
      v-model:value="inputTextContent"
      :value="inputTextContent"
    />
    <font-size-modifier class="modifier-bar__font-size" />
    <reset-button class="modifier-bar__reset" />
  </div>
</template>

<script setup>
import SearchBox from '../../components/SearchBox.vue';
import InputField from '../../components/InputField.vue';
import FontSizeModifier from '../../components/FontSizeModifier.vue';
import ResetButton from '../../components/ResetButton.vue';
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

// update text content
const inputTextContent = ref(store.state.textContent);
watch(inputTextContent, () =>
  store.commit('setTextContent', inputTextContent.value),
);
</script>

<style lang="scss" scoped>
@import '../../styles/display.scss';

.modifier-bar {
  display: flex;
  width: 100%;
  height: 48px;
  padding: 0 12px;
  border: 1px solid var(--border-color);
  border-radius: 50px;

  & > *::before {
    content: ' ';
    height: 100%;
    width: 1px;
    background-color: var(--border-color);
    margin: 0 12px;
  }

  & > *:first-child::before {
    content: '';
    height: 0;
    width: 0;
    margin: 0;
  }

  &__search {
    flex: 1;
  }

  &__input {
    flex: 2;
  }

  &__font-size {
    flex: 2;
  }

  @include mobile {
    &__input,
    &__font-size,
    &__reset {
      display: none;
    }
  }
}
</style>
