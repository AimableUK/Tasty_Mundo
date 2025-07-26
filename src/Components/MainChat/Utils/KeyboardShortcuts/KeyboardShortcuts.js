import React, { useEffect } from "react";

const KeyboardShortcuts = ({
  activeChatMode,
  selectedChat,
  isEditMode,
  isDeleteMode,
  onDelete,
  onEdit,
  onConfirmView,
  onConfirmEdit,
  onConfirmDelete,
  onExitEdit,
  onExitDelete,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      const isCtrlShift = e.ctrlKey && e.shiftKey;

      if (isCtrlShift && e.code === "KeyD") {
        if (!activeChatMode && selectedChat) {
          e.preventDefault();
          onDelete?.();
        }
      } else if (isCtrlShift && e.code === "KeyR") {
        if (!activeChatMode && selectedChat) {
          e.stopPropagation();
          e.preventDefault();
          onEdit?.();
        }
      } else if (e.code === "Enter") {
        if (!activeChatMode && selectedChat) {
          e.preventDefault();
          onConfirmView?.();
        } else if (isEditMode) {
          e.preventDefault();
          onConfirmEdit?.();
        } else if (isDeleteMode) {
          e.preventDefault();
          onConfirmDelete?.();
        }
      } else if (e.code === "Escape") {
        if (isEditMode) {
          e.preventDefault();
          onExitEdit?.();
        } else if (isDeleteMode) {
          e.preventDefault();
          onExitDelete?.();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    activeChatMode,
    selectedChat,
    isEditMode,
    isDeleteMode,
    onDelete,
    onEdit,
    onConfirmView,
    onConfirmEdit,
    onConfirmDelete,
    onExitEdit,
    onExitDelete,
  ]);

  return null;
};

export default KeyboardShortcuts;
