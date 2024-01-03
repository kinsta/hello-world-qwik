import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <main class="max-w-[932px] pb-8 pt-16 px-10">
        <Slot />
      </main>
    </>
  );
});
