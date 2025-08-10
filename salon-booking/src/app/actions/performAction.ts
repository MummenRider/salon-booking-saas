//Wrapper for server actions and return standard result and error handling
interface PerformActionOptions<T> {
  actionFn: () => Promise<T>;
  successMessage?: string;
  errorMessage?: string;
}
interface ActionResult {
  success: boolean;
  message: string;
}

export const performAction = async <T>({
  actionFn,
  successMessage = "Action performed successfully",
  errorMessage = "Action failed to run",
}: PerformActionOptions<T>): Promise<ActionResult> => {
  try {
    await actionFn();
    return {
      success: true,
      message: successMessage,
    };
  } catch (error: unknown) {
    console.error("performAction error:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : errorMessage,
    };
  }
};
